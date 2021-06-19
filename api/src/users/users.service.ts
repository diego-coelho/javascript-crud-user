import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, In } from 'typeorm';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private usersRepository: Repository<User>) {

  }

  async create(createUser: User) {

    const newUser = await this.usersRepository.create({
      ...createUser
    });
    await this.usersRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.usersRepository.find();
    // return this.usersRepository.find({ relations: ['user_type'] });
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, updateUser: UserDTO) {
    let toUpdate = await this.findOne(id);

    toUpdate.active = updateUser.active;
    toUpdate.email = updateUser.email;
    toUpdate.name = updateUser.name;
    toUpdate.nickname = updateUser.nickname;
    toUpdate.phone = updateUser.phone;
    toUpdate.user_type.id = updateUser.user_type;

    return this.usersRepository.save(toUpdate);
  }

  remove(id: string) {
    return this.usersRepository.delete({ id: id });
  }
}
