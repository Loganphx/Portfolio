import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ProjectsService} from "../_services/projects.service";
import {Project} from "../_models/Project";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProject: Project = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Logan Ingram - Portfolio");
  }

  ngOnInit() {
    this.featuredProject = this.projectService.GetProjectById(0)
  }
}
