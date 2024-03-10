import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Proyecto {
  @Field({ nullable: true })
    id: number

    @Field({nullable:true})
    name: string;

    @Field({ nullable: true })
    description?: string;

}
