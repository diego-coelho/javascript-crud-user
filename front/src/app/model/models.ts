export class User {
    constructor(
        public id: string,
        public nickname: string,
        public name: string,
        public phone: string,
        public email: string,
        public user_type: UserType,
        public active: boolean,
        public updatedAt: string,
        public createdAt: string
    ) { }


}

export class UserType {

    constructor(
        public id: string,
        public description: string,
        public active: boolean,
        public updatedAt: string,
        public createdAt: string
    ) {

    }
}