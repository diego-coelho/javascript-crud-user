import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeModule } from './user-type/user-type.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
    UserTypeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
