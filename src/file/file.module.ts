import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from '../entities/fileEntity';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  providers: [FileService],
  controllers: [FileController]
})
export class FileModule {}
