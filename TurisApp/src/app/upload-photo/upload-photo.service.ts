import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private
