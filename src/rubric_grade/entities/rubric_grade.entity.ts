import { Rubric } from "src/rubric/entities/rubric.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RubricGrade {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    grade: number;

    @Column()
    student: string;

    @Column()
    studentEval: string;

    @ManyToOne(() => Rubric, (rubric) => rubric.rubricGrades)
    @JoinColumn({ name: 'rubric_id' })
    rubric: Rubric;

}