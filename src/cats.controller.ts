import {Controller, Get, Post, Body} from '@nestjs/common';
import {CreateCatDto } from './dto';
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto){
    this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return `This action returns a #${id} cat`
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto){
    return `this action updates a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return `this action removes a #${id} cat`
  }
  
}
    