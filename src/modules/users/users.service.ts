import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepo.find();
    return users
  }

  async findOne(id: number) {
    return await this.userRepo.findOne({ where: { id: id } });
  }

  async findOneWithUserName(email: string) {
    return await this.userRepo.findOne({ where: { email: email } });
  }

  async create(createUserDto: CreateUserDto){
    const user = await this.userRepo.create(createUserDto);
    await this.userRepo.save(user);
    const { password, ...result } = user;
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id, updateUserDto);
  }
}