const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function () {
            // console.log('diste click ', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false

            });
            //console.log(this.tareas);
            this.nuevaTarea = '';
            this.enviarBD();
        },
        editarTarea: function (index) {
            this.tareas[index].estado = true;
            this.enviarBD();
        },
        eliminar: function (index) {
            this.tareas.splice(index, 1);
            this.enviarBD();
        },
        enviarBD: function () {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }

    },
    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null) {
            
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    },
    // computed: {
    //     enviarBD() {
    //         localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    //     }
    // }

});