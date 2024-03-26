#include <iostream>
using namespace std;
int main(){
int m;
cin>>m;
int k,n;
int y;
for(int j=0;j<m;j++){

y=0;

cin>>k>>n;
for(int i=1;i<k+1;i++){
    if(((n%2==0 && k%2==0)|| (n%2!=0 && k%2!=0)) && n<=k+k/2){
    if(y!=0 && k/y>2 && n!=k){
    y=y+i;
    cout<<y<<" ";}
    else{
    y=y+1;
    cout<<y<<" ";}

    }
    else{
    if(y!=0 && n/y>=2 && n!=k){
    y=y+i;
    cout<<y<<" ";}
    else{
    y=y+1;
    cout<<y<<" ";}

}}
cout<<endl;

}
return 0;
}
