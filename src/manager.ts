//your code goes here!

class listManager {
    public static  checkList(array : any[] ,  name: string) {
        return array.some(x => x.getName() == name);
    }
    public static findMember(array: any[], name: string) {
        if (listManager.checkList(array, name)) {
            return array.filter(x => x.getName() == name)[0];
        }
        else {
            //:(
        }
    }
}
class Affair {                        
    private name: string;
    private zip: number;
    private time: string;
    private guests: Members;
    constructor(address: number, clock: string) {
        this.zip = address;
        this.time = clock;
    }
    public addGuest(guest: Member) {
        if (this.guests.checkList(guest.getName())){
            this.guests.addMember(guest);
        }
        else {
            console.log("this member is already on the list");
        }
    }
    public setTime(date: string) {
        this.time = date;
    }
    public setName(locat: string) {
        this.name = locat;
    }
    public getName() {
        return this.name;
    }

    public emailList() {
        return this.guests.getMembers().map(x=>x.getEmail());
    }

}

class Member {
    private name: string;
    private email: string;

    constructor(address: string , id: string) {
        this.email = address;
        this.name = id;
    }
    public setEmail(address: string) {
        this.email = address;
    }
    public getName() {
        return this.name;
    }
    public getEmail() {
        return this.email;
    }
}

class Organization {
    private affairs: Array<Affair>;
    private name: string;
    constructor(id: string) {
        this.name = id;
    }
    public getname() {
        return this.name;
    }
    public addAffair(afair: Affair) {
        this.affairs.push(afair);
    }
    public checkList(name: string) {
        return listManager.checkList(this.affairs, name);
    }
    public searchMembers(name: string) {
        return listManager.findMember(this.affairs, name);
    }
}

class Organizaitons {
    private list: Array<Organization>;
    public addOrg(org: Organization) {
        this.list.push(org);
    }
    public checkList(name: string) {
        return listManager.checkList(this.list, name);
    }
    public searchMembers(name: string) {
        return listManager.findMember(this.list, name);
    }

}

class Members {
    private members: Array<Member>;
    public addMember(green :Member) {
        this.members.push(green);
    }

    
    getMembers() {
        return this.members;
    }

    public checkList(name: string) {
        return listManager.checkList(this.members, name);
    }
    public searchMembers(name: string) {
        return listManager.findMember(this.members, name);
    }
}