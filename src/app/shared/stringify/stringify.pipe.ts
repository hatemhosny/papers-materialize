import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify'
})
export class StringifyPipe implements PipeTransform {

  transform(value: any): string {
    let text = '';
    // if string keep it as it is
    if (value) {
      if (typeof value === 'string') {
        text = value;
      } else
      // if array
      if (Array.isArray(value)) {
        // loop through its items
        value.forEach(item => {
          // if the array item is an object
          if (typeof(item) === 'object') {
            for (let property in item) {
              if (item.hasOwnProperty(property)) {
                // add the value to the string
                text +=  item[property];
                  // if the first node is empty
                  if (text === '') {
                    // don't add anything
                  } else if (property === 'abstract_section') {
                    text += ': ';
                  } else {
                    text += ' ';
                  }
              }
            }
          }
        });
      }
      text = this.removeHTMLTags(text);
      return text;
    }
  }

  private removeHTMLTags(code) {
    // replace escaped brackets with real ones,
    code = code.replace(/&(lt|gt);/g, function (strMatch, p1){
      return (p1 === 'lt') ? '<' : '>';
    });
    // remove tags
    code = code.replace(/<\/?[^>]+(>|$)/g, '');

    return code;
  }

}
