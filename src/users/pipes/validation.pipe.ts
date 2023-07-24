import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    log('My custome validation pipe : ',value);
    return value;
  }
}