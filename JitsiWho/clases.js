class Student {
    constructor(firstName, lastName, image) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
    }
}

class StudentList {
    constructor() {
        this.students = [];
    }

    addStudent(firstName, lastName, image) {
        this.students.push({ firstName, lastName, image });
    }

    getStudents() {
        return this.students;
    }
}
//Clase ejemplo
const classDang1 = new StudentList();
classDang1.addStudent('Makoto', 'Naegi', './pictures/makoto_naegi.png');
classDang1.addStudent('Kyoko', 'Kirigiri', './pictures/kyoko_kirigiri.png');
classDang1.addStudent('Byakuya', 'Togami', './pictures/byakuya_togami.png');
classDang1.addStudent('Aoi', 'Asahina', './pictures/aoi_asahina.png');
classDang1.addStudent('Yasuhiro', 'Hagakure', './pictures/yasuhiro_hagakure.png');
classDang1.addStudent('Toko', 'Fukawa', './pictures/toko_fukawa.png');
classDang1.addStudent('Celestia', 'Ludenberg', './pictures/celestia_ludenberg.png');
classDang1.addStudent('Sakura', 'Ogami', './pictures/sakura_ogami.png');
classDang1.addStudent('Mondo', 'Owada', './pictures/mondo_owada.png');
classDang1.addStudent('Kiyotaka', 'Ishimaru', './pictures/kiyotaka_ishimaru.png');
classDang1.addStudent('Hifumi', 'Yamada', './pictures/hifumi_yamada.png');
classDang1.addStudent('Leon', 'Kuwata', './pictures/leon_kuwata.png');
classDang1.addStudent('Chihiro', 'Fujisaki', './pictures/chihiro_fujisaki.png');
classDang1.addStudent('Sayaka', 'Maizono', './pictures/sayaka_maizono.png');
classDang1.addStudent('Junko', 'Enoshima', './pictures/junko_enoshima.png');
export { classDang1, StudentList };