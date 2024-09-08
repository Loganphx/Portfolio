import { Injectable } from '@angular/core';
import {Project} from "../_models/Project";
import {Tag} from "../_models/Tag";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: "Dating App",
      summary: "This is a sample project for demonstration purposes.",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fames curabitur netus tristique arcu fringilla habitant. Lorem varius feugiat nibh quisque massa himenaeos nisl. Cursus ligula commodo curae non interdum netus. Elementum tincidunt magna tellus netus montes. Ad lacinia congue nam cursus habitasse hendrerit rutrum senectus. Elit sit ultricies, fusce rutrum sodales facilisi. Dictumst cras molestie augue phasellus mauris curabitur. Condimentum montes pellentesque leo nam magnis molestie integer curabitur ante. Mus nullam augue massa litora in, eget vulputate. Sem adipiscing erat ultricies ad iaculis lacus. Nascetur vestibulum est conubia augue tellus vehicula. Porttitor posuere lectus finibus vestibulum leo ac..",
      projectLink: "//github.com",
      pictures: ["assets/image1.png", "assets/image2.png", "assets/image3.png"],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: "Sample Python Project",
      summary: "This is a sample project for demonstration purposes.",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fames curabitur netus tristique arcu fringilla habitant. Lorem varius feugiat nibh quisque massa himenaeos nisl. Cursus ligula commodo curae non interdum netus. Elementum tincidunt magna tellus netus montes. Ad lacinia congue nam cursus habitasse hendrerit rutrum senectus. Elit sit ultricies, fusce rutrum sodales facilisi. Dictumst cras molestie augue phasellus mauris curabitur. Condimentum montes pellentesque leo nam magnis molestie integer curabitur ante. Mus nullam augue massa litora in, eget vulputate. Sem adipiscing erat ultricies ad iaculis lacus. Nascetur vestibulum est conubia augue tellus vehicula. Porttitor posuere lectus finibus vestibulum leo ac..",
      projectLink: "//github.com",
      pictures: ["assets/image1.png", "assets/image2.png", "assets/image3.png"],
      tags: [Tag.PYTHON],
    },
    {
      id: 2,
      name: "Sample C# Rest API",
      summary: "This is a sample project for demonstration purposes.",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fames curabitur netus tristique arcu fringilla habitant. Lorem varius feugiat nibh quisque massa himenaeos nisl. Cursus ligula commodo curae non interdum netus. Elementum tincidunt magna tellus netus montes. Ad lacinia congue nam cursus habitasse hendrerit rutrum senectus. Elit sit ultricies, fusce rutrum sodales facilisi. Dictumst cras molestie augue phasellus mauris curabitur. Condimentum montes pellentesque leo nam magnis molestie integer curabitur ante. Mus nullam augue massa litora in, eget vulputate. Sem adipiscing erat ultricies ad iaculis lacus. Nascetur vestibulum est conubia augue tellus vehicula. Porttitor posuere lectus finibus vestibulum leo ac..",
      projectLink: "//github.com",
      pictures: ["assets/image1.png", "assets/image2.png", "assets/image3.png"],
      tags: [Tag.CSHARP, Tag.ASPNET],
    }
  ];
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id == id);

    if(project === undefined){
      throw new TypeError("There is no project that matches the id: " + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if(!project.tags.includes(filterTag)) {
          foundAll = false;
        }
      });

      if(foundAll) {
        filteredProjects.push(project);
      }
    })

    return filteredProjects;
  }
}
