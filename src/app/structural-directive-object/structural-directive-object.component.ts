import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-object',
  templateUrl: './structural-directive-object.component.html',
  styleUrls: ['./structural-directive-object.component.css']
})
export class StructuralDirectiveObjectComponent implements OnInit {
  newEn = '';
  newVn = '';
  statusFilter = 'Xem_tat_ca'
  displayForm = true;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
   arrWordsFilter = [{}];

  constructor() { }

  ngOnInit(): void {
  }
  addNewWord(){
    this.arrWords.unshift({
      id : this.arrWords.length +1,
      en : this.newEn,
      vn : this.newVn,
      memorized : false
    });
    this.newEn = '';
    this.newVn ='';
    this.displayForm = false;
  }
  showForm(){
    this.displayForm = true;
  }
  removeWord(id :number){
    var index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index,1);
  }
  getShowStatus(memorized : boolean)
  {
    var dkXemTatCa = this.statusFilter === 'Xem_tat_ca';
    var dkXemDaNho = this.statusFilter === 'Xem_da_nho' && memorized;
    var dkXemChuaNho = this.statusFilter === 'Xem_chua_nho' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }
  getShowStatus2(memorized : boolean)
  {
     if(this.statusFilter === 'Xem_tat_ca'){
        return true;
     }
    if(this.statusFilter === 'Xem_da_nho' && memorized){
        return true;
    }
    if(this.statusFilter === 'Xem_chua_nho' && !memorized){
        return true;
    }
    return false;
  }
 
  // changeFilter(statusFilter : string){
  //     if(statusFilter === 'Xem_tat_ca'){
  //       this.arrWordsFilter = this.arrWords;
  //     }
  //     if(statusFilter === 'Xem_da_nho'){
  //       this.arrWordsFilter = this.arrWords.filter(word => {
  //           word.memorized === true
  //       });
  //     }
  //     if(statusFilter === 'Xem_chua_nho'){
  //       this.arrWordsFilter = this.arrWords.filter(word => {
  //           word.memorized === false
  //       });
  //     }
  // }

}
