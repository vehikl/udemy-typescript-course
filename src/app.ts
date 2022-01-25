 class Project {

    title: string;
    description: string;
    author: string;

    constructor(title: string, description: string, author: string) {
        this.title = title;
        this.description = description;
        this.author = author;
        console.log('it works');
    }
}

class Projects {

    list: Array<Project>;

    constructor(list: Array<Project>){
        this.list = list;
    }

    add(project: Project) {
        this.list.push(project);
    };
}
