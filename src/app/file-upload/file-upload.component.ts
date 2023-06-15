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
    console.log(event);
    console.log(src);
    let file: File = event.addedFiles[0];
    let fileReader: FileReader = new FileReader();
    let bv_search_term: string = "brightness_value=";
    let cct_search_term: string = "cct="; 
    let bv: number | null;
    let cct: number | null;
    fileReader.onload = () => {
      console.log("file reader onload!");
      let text = fileReader.result;
      if (text != null) {
        text = text.toString();
        let targetIndex: number = text.indexOf(bv_search_term);
        let targetString: string[] = text.substring(targetIndex-12, targetIndex+25).split(' ');
        targetString.forEach(str => {
          if (str.includes(cct_search_term)) {
            cct = parseInt(str.substring(str.indexOf(cct_search_term)+ cct_search_term.length));
          }
          else if (str.includes(bv_search_term)) {
            bv = parseInt(str.substring(str.indexOf(bv_search_term)+ bv_search_term.length));
          }
        });

      }
      console.log("bv:", bv);
      console.log("cct:", cct);
    }

    fileReader.readAsText(file);
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
