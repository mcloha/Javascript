function printFamily(){ var family = [
                {
                    name:'Victoria',
                    age:54,
                    gender:'female'},
                {
                    name:'Dima',
                    age:32,
                    gender:'male'},
                {
                    name:'Tima',
                    age:27,
                    gender:'male'}
                ];
                for(var i = 0;i<family.length;i++)
                    {
                        document.write(family[i].name + ' ' + family[i].age + ' ' + family[i].gender  + "<br>");
                    }
                                      }
                printFamily()
}