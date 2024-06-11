import {Controller, Get, Put, Delete, Post, Body, Query, Param} from '@nestjs/common';
import {CreateCatDto, UpdateCatDto, ListAllEntities} from '.dto';
//import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto){
    return "This action adds a new cat"
  }

  @Get()
  findAll(@Query() query: ListAllEntities){
    return `this action returns all cats (limit: ${query.limit} items)`
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
    