import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { UserType } from './entities/user-type.entity';

@Controller('user-type')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) { }

  @Post()
  create(@Body() createUserType: UserType) {
    return this.userTypeService.create(createUserType);
  }

  @Get()
  findAll() {
    return this.userTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserType: UserType) {
    return this.userTypeService.update(id, updateUserType);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTypeService.remove(id);
  }
}
