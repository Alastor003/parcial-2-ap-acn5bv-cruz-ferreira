import { Component } from '@angular/core';
import { UploadPhotoService } from '../services/upload-photo.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
  selectedFile: File | null = null;

  constructor(private uploadPhotoService: UploadPhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPhoto() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('photo', this.selectedFile, this.selectedFile.name);

      this.uploadPhotoService.uploadPhoto(formData).subscribe(response => {
        console.log('Photo uploaded', response);
      });
    }
  }
}
