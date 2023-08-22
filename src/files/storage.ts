import { diskStorage } from 'multer';

export const fileStorage = diskStorage({
  destination: './uploads',
});
