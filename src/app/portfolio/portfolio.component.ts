import {Component, OnInit} from '@angular/core';
import {Project} from "../_models/Project";
import {Tag} from "../_models/Tag";
import {Title} from "@angular/platform-browser";
import {ProjectsService} from "../_services/projects.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean = true;
  filtering: boolean = false;

  // Languages
  typescript: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  csharp: boolean = false;
  python: boolean = false;

  // Frameworks
  angular: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Logan Ingram - Portfolio");
  }

  ngOnInit() {
    this.projects = this.projectService.GetProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    // Languages
    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.java) {
      filterTags.push(Tag.JAVA)
    }
    if(this.csharp) {
      filterTags.push(Tag.CSHARP)
    }
    if(this.python) {
      filterTags.push(Tag.PYTHON)
    }

    // Frameworks
    if(this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if(this.aspnet) {
      filterTags.push(Tag.ASPNET)
    }
    if(this.nodejs) {
      filterTags.push(Tag.NODEJS)
    }
    if(this.react) {
      filterTags.push(Tag.REACT)
    }

    this.filtering = filterTags.length != 0;

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {

    // Languages
    this.typescript = false;
    this.javascript = false;
    this.java = false;
    this.csharp = false;
    this.python = false;

    // Frameworks
    this.angular = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;

    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
