import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  files: File[] = [];
  refFiles: File[] = [];
  hasBasicJson: boolean = false;
  hasAdvanceJson: boolean = false;
  hasFeatureJson: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(event: any) {
    event.addedFiles.forEach((e: File) => {
      if (e.name.slice(-5) == ".json") {
        if (e.name.includes("basic_tuning")) {
          this.hasBasicJson = true;
          this.files.push(e);
        }
        else if (e.name.includes("feature_tuning")) {
          this.hasFeatureJson = true;
          this.files.push(e);
        }
        else if (e.name.includes("advance_tuning")) {
          this.hasAdvanceJson = true;
          this.files.push(e);
        }
      }
    });
  }

  onSelectFiles(event: any, src: string) {
    // read log file and parse cct/ bv
    // send stats and color checker image to backend
  }

  onRemove(event: any) {
    if (event.name.includes("basic_tuning")) {
      this.hasBasicJson = false;
    }
    else if (event.name.includes("feature_tuning")) {
      this.hasFeatureJson = false;
    }
    else if (event.name.includes("advance_tuning")) {
      this.hasAdvanceJson = false;
    }
    this.files.splice(this.files.indexOf(event), 1);
  }
}
