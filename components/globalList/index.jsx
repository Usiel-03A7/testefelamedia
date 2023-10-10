"use client"
import { firestore } from "@/services/firestore"
import { collection, getDocs } from "firebase/firestore"
import styles from "./globalist.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CaretDoubleRight, List  } from '@phosphor-icons/react';
import { useRef } from "react"


/*
 * 
 * se metio a un objeto porque data no trae un id
 * y al hacer objeto podermo declarar el id del doc y hacerque regrese un objeto conel id
 * spread operator
 */

async function getData() {
  const reference = collection(firestore, "cofeetypes")
  const docs = await getDocs(reference)
  return docs.docs.map(doc => ({ ...doc.data(), id: doc.id }))
}


export default function GlobalList() {
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState()
  const [claseActiva, setClaseActiva] = useState(true)
  useEffect(() => {
    getData().then(
      result => {
        setTypes(result)
        setSelectedType(result[0])
      })
  }, [])


  return (
    <div className={styles.container} >
      <button onClick={()=>{
        // seleccionar la clase listtypes 
        setClaseActiva(!claseActiva);
      }} > <List size={62} /></button>
      <div className={claseActiva ? styles.listtypes : styles.listtopes}>
        <h4>Listado de cafe</h4>
        <ul>
          {types.map(type => (
            <li onClick={() => {
              setSelectedType(type)
            }}
              className={type.id == selectedType.id ? styles.active : null}
              key={type.id} >
              {type.name}
              <CaretDoubleRight size={24} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.coffeetypes}>
         { selectedType ? <Image src={"/img/types/"+selectedType.img} width={300} height={300} alt="no hay foto pues"  /> : null}
        {selectedType ? <div className={styles.containerInfo}>
          <h2>{selectedType.name}</h2>
          <p>{selectedType.description}</p>
        </div> : null}
      </div>
    </div>
  )
}