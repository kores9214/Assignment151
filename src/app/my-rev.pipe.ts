import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string
  {
    // Create new string to hold the reverse string
    let temp: string = "";
    // Traverse the string from end and copy the contents in temp.
    console.log("Length: " + value.length)
    for(var i=value.length-1;i>=0;i--){
      temp=temp+value.charAt(i);
    }
    console.log("Temp: " + temp);
    return temp;
  }
}
