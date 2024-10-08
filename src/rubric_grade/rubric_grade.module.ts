import { Module } from '@nestjs/common';
import { RubricGradeService } from './rubric_grade.service';
import { RubricGradeController } from './rubric_grade.controller';
import { CriteriaModule } from '../criteria/criteria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RubricGrade } from './entities/rubric_grade.entity';
import { RubricModule } from '../rubric/rubric.module';
import { AuthModule } from '../auth/auth.module';
import { CriteriaGradeModule } from '../criteria_grade/criteria_grade.module';
import { CriteriaGrade } from '../criteria_grade/entities/criteria_grade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RubricGrade, CriteriaGrade]),
  CriteriaModule, RubricModule, AuthModule, CriteriaGradeModule
  ],
  controllers: [RubricGradeController],
  providers: [RubricGradeService],
  exports: [RubricGradeService]
})
export class RubricGradeModule {}
