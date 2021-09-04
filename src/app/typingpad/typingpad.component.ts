import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-typingpad',
  templateUrl: './typingpad.component.html',
  styleUrls: ['./typingpad.component.css']
})
export class TypingpadComponent implements OnInit {
  timeLeft: number = 60;
  interval: any;
  wordCount: any;
  content: string;
  query!: string;
  
  constructor(private route:Router) {
    this.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a quam ornare, bibendum ligula a, rhoncus ligula. Etiam aliquet, justo sollicitudin imperdiet luctus, nulla justo sodales mi, sit amet semper nisl velit vel massa. In hac habitasse platea dictumst.";
  }
  @ViewChild("text") text!: any;
  @ViewChild("para") para!: any;
  words: any;
  
  ngOnInit(): void {
  }

  
  highlight() {
    if(!this.query) {
       return this.content;
    }
    return this.content.replace(new RegExp(this.query, "gi"), match => {
        return '<span class="highlightText">' + match + '</span>';
    });
}

  wordCounter(event:any) {
    //alert(this.text.nativeElement.value)
    console.log(event.target.value)
    //console.log(this.words)
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }
  typeText(){
    const abc = this.para.nativeElement.innerHTML
    console.log(abc)
    // const text_data = this.text.nativeElement.innerText
  this.interval = setInterval(() => {
    if (this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      
      this.route.navigate(['/'])
    }
  }, 1000);
  }

  
 
}
