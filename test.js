function breakingRecords(scores) {
    var curent1=scores[0],curent2=scores[0];
    var dem1=0, dem2=0;
    for (const element of scores) {
        if(element>curent1) {
            curent1=element;
            dem1++;
        } else if(element<curent2){
            curent2=element;
            dem2++;
        }
    }
    console.log(dem1,dem2);
}
var arr=[10,5,20,20,4,5,2,25,1];
breakingRecords(arr);