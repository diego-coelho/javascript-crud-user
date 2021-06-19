import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userTypeDTO } from './dto/userType.dto';
import { UserType } from './entities/user-type.entity';

@Injectable()
export class UserTypeService {

  constructor(@InjectRepository(UserType)
  private userTypeRepository: Repository<UserType>) {
  }

  async create(createUserType: UserType) {

    const newUser = await this.userTypeRepository.create({
      ...createUserType
    });
    await this.userTypeRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.userTypeRepository.find();
  }

  findOne(id: string) {
    return this.userTypeRepository.findOne(id);
  }

  async update(id: string, updateUserType: userTypeDTO) {
    let toUpdate = await this.findOne(id);

    toUpdate.description = updateUserType.description;
    toUpdate.active = updateUserType.active;

    return await this.userTypeRepository.save(toUpdate);
  }

  async remove(id: string) {
    return await this.userTypeRepository.delete({ id: id });
  }
}
