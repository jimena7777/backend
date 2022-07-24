//const{personas,mascotas,servicios}=require('../sampleData.js');
const {GraphQLNonNull, GraphQLObjectType,GraphQLSchema,GraphQLList,GraphQLID,GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql');
//mongoose modelos
const Persona = require("../models/Persona");
const Mascota = require("../models/Mascota");
const Servicio = require("../models/Servicio");

const PersonaType = new GraphQLObjectType({
    name: "Persona",
    fields: () => ({
      id: { type: GraphQLID },
      nombre: { type: GraphQLString },
      apellido: { type: GraphQLString },
      documento: { type: GraphQLInt },
      direccion:{type:GraphQLString},
      celular:{type:GraphQLInt},
      
    }),
  });

  
const MascotaType = new GraphQLObjectType({
  name: "Mascota",
  fields: () => ({
    id: { type: GraphQLID },
    raza: { type: GraphQLString },
    edad: { type: GraphQLInt },
    color: { type: GraphQLString },
    peso: { type: GraphQLString },

  }),
});
  
  const ServicioType = new GraphQLObjectType({
    name: "Servicio",
    fields: () => ({
      id: { type: GraphQLID },
      bano: { type: GraphQLString },
      recorte_pelo: { type: GraphQLString },
      revision_veterinaria: { type: GraphQLString },
      actividad_canina: { type: GraphQLString },

    }),
  });

   

  const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      personas: {
        type: new GraphQLList(PersonaType),
        resolve(parent, args) {
          return Persona.find();
        },
      },
      mascotas: {
        type: new GraphQLList(MascotaType),
        resolve(parent, args) {
          return Mascota.find();
        },
      },
      servicios: {
        type: new GraphQLList(ServicioType),
        resolve(parent, args) {
          return Servicio.find();
        },
      },
      persona: {
        type: PersonaType, 
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Persona.findById(args.id);
        },
      },
      
    mascota: {
      type: MascotaType, 
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Mascota.findById(args.id);
      },
    },
    servicio: {
      type: ServicioType, 
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Servicio.findById(args.id);
      },
    },

    }
  });
//Mutations
//add
const mutation = new GraphQLObjectType({
  name: "addPersona",
  fields: {
    addPersonas: {
      type: PersonaType,
      args: {
        nombre: { type: GraphQLNonNull(GraphQLString)},
        apellido: { type: GraphQLNonNull(GraphQLString) },
        documento: { type: GraphQLNonNull(GraphQLInt) },
        direccion: { type: GraphQLNonNull(GraphQLString) },
        celular: { type: GraphQLNonNull(GraphQLInt) },

      },
      resolve(parent, args) {
        console.log("mutation", args);
        const persona = new Persona({
          nombre: args.nombre,
          apellido: args.apellido,
          documento: args.documento,
          direccion: args.direccion,
          celular: args.celular,

        });
        return persona.save();
      },
    },
    //delete
    deletePersonas: {
      type: PersonaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Persona.findByIdAndRemove(args.id);
      },
    },
    //update
    updatePersonas: {
      type: PersonaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        nombre: { type: GraphQLString },
        apellido: { type: GraphQLString },
        documento: { type: GraphQLInt },
        direccion: { type: GraphQLString },
        celular: { type: GraphQLInt },

      },
      resolve(parent, args) {
        return Persona.findByIdAndUpdate(
          args.id,
          {
            $set: {
              nombre: args.nombre,
              apellido: args.apellido,
              documento: args.documento,
              direccion: args.direccion,
              celular: args.celular,
            },
          },
          { new: true }
        );
      },
    },
  


  //mascotas mutation
    addMascotas: {
      type: MascotaType,
      args: {
        raza: { type: GraphQLNonNull(GraphQLString)},
        edad: { type: GraphQLNonNull(GraphQLInt) },
        color: { type: GraphQLNonNull(GraphQLString) },
        peso: { type: GraphQLNonNull(GraphQLString) },
        

      },
      resolve(parent, args) {
        console.log("mutation", args);
        const mascota = new Mascota({
          raza: args.raza,
          edad: args.edad,
          color: args.color,
          peso: args.peso,
          

        });
        return mascota.save();
      },
    },
    //delete
    deleteMascotas: {
      type: MascotaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Mascota.findByIdAndRemove(args.id);
      },
    },
    //update
    updateMascotas: {
      type: MascotaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        raza: { type: GraphQLString },
        edad: { type: GraphQLInt },
        color: { type: GraphQLString },
        peso: { type: GraphQLString },
       

      },
      resolve(parent, args) {
        return Mascota.findByIdAndUpdate(
          args.id,
          {
            $set: {
              raza: args.raza,
              edad: args.edad,
              color: args.color,
              peso: args.peso,
            },
          },
          { new: true }
        );
      },
    },
  


  //servicios mutation
    addServicios: {
      type: ServicioType,
      args: {
        bano: { type: GraphQLNonNull(GraphQLString)},
        recorte_pelo: { type: GraphQLNonNull(GraphQLString) },
        revision_veterinaria: { type: GraphQLNonNull(GraphQLString) },
        actividad_canina: { type: GraphQLNonNull(GraphQLString) },
        

      },
      resolve(parent, args) {
        console.log("mutation", args);
        const servicio = new Servicio({
          bano: args.bano,
          recorte_pelo: args.recorte_pelo,
          revision_veterinaria: args.revision_veterinaria,
          actividad_canina: args.actividad_canina,
          

        });
        return servicio.save();
      },
    },
    //delete
    deleteServicios: {
      type: ServicioType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Servicio.findByIdAndRemove(args.id);
      },
    },
    //update
    updateServicios: {
      type: ServicioType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        bano: { type: GraphQLString },
        recorte_pelo: { type: GraphQLString },
        revision_veterinaria: { type: GraphQLString },
        actividad_canina: { type: GraphQLString },
       

      },
      resolve(parent, args) {
        return Servicio.findByIdAndUpdate(
          args.id,
          {
            $set: {
              bano: args.bano,
              recorte_pelo: args.recorte_pelo,
              revision_veterinaria: args.revision_veterinaria,
              actividad_canina: args.actividad_canina,
            },
          },
          { new: true }
        );
      },
    },
  },
});



  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
  });