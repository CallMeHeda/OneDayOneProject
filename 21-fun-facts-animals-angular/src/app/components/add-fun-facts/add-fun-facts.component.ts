import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-add-fun-facts',
  templateUrl: './add-fun-facts.component.html',
  styleUrls: ['./add-fun-facts.component.scss'],
})
export class AddFunFactsComponent implements OnInit {
  animalForm: FormGroup;
  selectedImage: File | null = null;

  constructor(private _fb: FormBuilder) {
    this.animalForm = this._fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required],
      habitat: [null, Validators.required],
      diet: [null, Validators.required],
      characteristic: [null],
      behavior: [null],
      conservation_status: [null, Validators.required],
      fun_facts: [null, Validators.required],
      image: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  postAnimal(): void {
    if (this.animalForm.valid) {
      const newAnimal = this.animalForm.value;
      const formData = new FormData();

      for (const data in newAnimal) {
        if (newAnimal.hasOwnProperty(data)) {
          formData.append(data, newAnimal[data]);
        }
      }

      if (this.selectedImage) {
        formData.append('image', this.selectedImage);
      }

      axios
        .post('http://localhost:3000/api/animals', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log('Animal added:', response.data);
          this.animalForm.reset();
          this.selectedImage = null;
          this.fetchAnimals();
        })
        .catch((error) => {
          console.error('Error adding animal', error);
        });
    }
  }
  fetchAnimals(): void {
    axios.get('http://localhost:3000/api/animals').then((response) => {
      console.log(response.data);
    });
  }
}
