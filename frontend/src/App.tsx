import { useEffect, useState, useRef, type FormEvent } from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { api } from './services/api'

interface CustomerProps{
  id: string;
  name: string;
  email: string;
  status: boolean;
  age: number;
  ender: string;
  num: number;
  cid: string;
  est: string;
  cel: string;
  created_at: string;
  updated_at:string;
}

export default function App() {

  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const enderRef = useRef<HTMLInputElement | null>(null);
  const numRef = useRef<HTMLInputElement | null>(null);
  const cidRef = useRef<HTMLInputElement | null>(null);
  const estRef = useRef<HTMLInputElement | null>(null);
  const celRef = useRef<HTMLInputElement | null>(null);  

  useEffect(() => {
    loadCustomers();
  }, [])

async function clearCustomers() {
  (emailRef.current as HTMLInputElement).value = '';
  (nameRef.current as HTMLInputElement).value = '';
  (ageRef.current as HTMLInputElement).value = '0';
  (enderRef.current as HTMLInputElement).value = '';
  (numRef.current as HTMLInputElement).value = '0';
  (cidRef.current as HTMLInputElement).value = '';
  (estRef.current as HTMLInputElement).value = '';
  (celRef.current as HTMLInputElement).value = '';
}  

async function loadCustomers() {
  const response = await api.get("/customer")
  setCustomers(response.data); 
}

async function handleSubmit(event: FormEvent) {
  event.preventDefault();

  if (!nameRef.current?.value || !emailRef.current?.value) return;

  const response = await api.post("/customer", {
    name: nameRef.current.value,
    email: emailRef.current.value,
    age: parseInt(ageRef.current?.value || '0'),
    ender: enderRef.current?.value,
    num: parseInt(numRef.current?.value || '0'),
    cid: cidRef.current?.value,
    est: estRef.current?.value,
    cel: celRef.current?.value
  })

  clearCustomers(); 

  setCustomers(allCustomers => [...allCustomers, response.data])
}

async function handleDelete(id: string) {
  try{
    await api.delete("/customer", {
      params: {
        id: id,
      }
    })
    const allCustomers = customers.filter((customer) => customer.id !== id)
    setCustomers(allCustomers)
  }catch(err) {
    console.log(err);
  }

  clearCustomers(); 
}

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo..."
            className="w-full mb-5 p-2 rounded bg-white"
            ref={nameRef}
            required
           />
          <label className="font-medium text-white">Email:</label>
          <input
            type="email"
            placeholder="Digite seu email..."
            className="w-full mb-5 p-2 rounded bg-white"
            ref={emailRef}
            required
           /> 
          <label className="font-medium text-white">Idade:</label>
          <input
            type="number"
            placeholder="Idade..."
            className="w-full mb-5 p-2 rounded bg-white"
            ref={ageRef}
            required
           />  
          <label className="font-medium text-white">Endereço:</label>
          <input
            type="text"
            placeholder="Endereço Completo..."
            className="w-full mb-5 p-2 rounded bg-white"
            ref={enderRef}
            required
           />   
          <label className="font-medium text-white">Número:</label>
          <input
            type="number"
            placeholder="Número do Endereço..."
            className="w-full mb-5 p-2 rounded bg-white"
            ref={numRef}
            required
           /> 
          <label className="font-medium text-white">Cidade:</label>
          <input
            type="text"
            placeholder="Cidade..."
            className="w-full mb-5 p-2 rounded bg-white"
            ref={cidRef}
            required
           />   
          <label className="font-medium text-white">Estado:</label>
          <input
            type="text"
            placeholder="Estado..."
            className="w-full mb-5 p-2 rounded bg-white"
            ref={estRef}
            required
           />  
          <label className="font-medium text-white">Celular:</label>
          <input
            type="tel"
            placeholder="Celular (99) 9-9999-9999"
            className="w-full mb-5 p-2 rounded bg-white"
            ref={celRef}
            required
           />   
          <label className="font-medium text-white">Status:</label>
          <select className="w-full mb-5 p-2 rounded bg-white">
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
          </select>                                                                  
          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
            />
        </form>
        <section className="flex flex-col gap-2">
          {customers.map( (customer) => (
            <article
              key={customer.id}
              className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
            >
                <p><span className="font-medium">Nome:</span>{customer.name}</p>
                <p><span className="font-medium">Email:</span>{customer.email}</p>   
                <p><span className="font-medium">Idade:</span>{customer.age}</p> 
                <p><span className="font-medium">Endereço:</span>{customer.ender}</p> 
                <p><span className="font-medium">Número:</span>{customer.num}</p> 
                <p><span className="font-medium">Cidade:</span>{customer.cid}</p> 
                <p><span className="font-medium">Estado:</span>{customer.est}</p> 
                <p><span className="font-medium">Celular:</span>{customer.cel}</p> 
                <p><span className="font-medium">Status:</span>{customer.status ? "Ativo" : "Inativo"}</p> 
            <button
              className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
              onClick={() => handleDelete(customer.id)}
            >
              <FiTrash2 size={18} color="#fff"/>
            </button>
          </article>
          ))}
        </section>
      </main>
    </div>  
  )  
}

