import { Field, Model } from '@utils'

export class Role extends Model {
    static getTable() {
        return "user_roles";
    }

    @Field(["fillable", "selectable", "searchable"])
    name!: string
}
