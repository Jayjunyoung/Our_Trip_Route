interface ImportMetaEnv {
  readonly VITE_TOUR_API_KEY: string;
  // api키에대한 타입 지정
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
