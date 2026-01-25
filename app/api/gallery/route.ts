import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { weddingConfig } from '../../../src/config/wedding-config';

export async function GET() {
  try {
    const isRemoteUrl = (url: string) => url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');
    
    // 갤러리 폴더 경로
    const galleryDir = path.join(process.cwd(), 'public/images/gallery');
    
    // 폴더 내 파일 목록 읽기
    const files = fs.readdirSync(galleryDir);
    
    // 이미지 파일 필터링
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
      });
    
    // config 파일에 설정된 순서로 이미지 정렬
    const configImages = weddingConfig.gallery.images;
    const orderedImages: string[] = [];
    
    // config에 설정된 순서대로 존재하는 이미지만 추가
    for (const configImagePath of configImages) {
      // 외부 URL은 존재 여부 확인 없이 그대로 사용
      if (isRemoteUrl(configImagePath)) {
        orderedImages.push(configImagePath);
        continue;
      }
      
      const filename = path.basename(configImagePath);
      if (imageFiles.includes(filename)) {
        // 로컬 파일은 정규화된 경로로 반환
        orderedImages.push(configImagePath.startsWith('/images/gallery/')
          ? configImagePath
          : `/images/gallery/${filename}`);
      }
    }
    
    // 현재 요구사항: config에 정의된 이미지들만 응답으로 사용
    const finalImages = [...orderedImages];
    
    return NextResponse.json({ images: finalImages });
  } catch (error) {
    console.error('갤러리 이미지 로드 오류:', error);
    return NextResponse.json(
      { 
        error: '갤러리 이미지를 불러오는 중 오류가 발생했습니다.',
        images: weddingConfig.gallery.images // 에러 시 config 설정 반환
      }, 
      { status: 500 }
    );
  }
} 