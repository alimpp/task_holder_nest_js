import { Module, ValidationPipe } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestEntity } from 'src/entities/request.entity';
import { FriendsEntity } from 'src/entities/friends.entity';

import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity, FriendsEntity, UserEntity])],
  controllers: [RequestController],
  providers: [RequestService, UsersService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ]
})
export class RequestModule {}
