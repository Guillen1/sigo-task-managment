import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from 'src/tasks/domain/models/task.model';

export class UpdateTaskDto {
  @ApiPropertyOptional({ type: 'string', description: 'The title of the task' })
  @IsOptional()
  @IsNotEmpty({ message: 'title should not be empty if provided' })
  title?: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'The description of the task',
  })
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    enum: TaskStatus,
    description: 'The new status of the task',
  })
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: `status must be one of the following values: ${Object.values(TaskStatus).join(', ')}`,
  })
  status?: TaskStatus;
}
