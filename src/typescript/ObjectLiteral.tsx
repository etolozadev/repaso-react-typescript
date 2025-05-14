
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

export const ObjectLiteral = () => {

  const person : Person = {
    firstName: 'Esteban',
    lastName: 'Toloza',
    age: 26,
    address: {
      street: 'Calle 1',
      city: 'Ciudad 1',
      country: 'Pais 1'
    },
    isAlive: true
  }
  
  person.address.country = 'Pais 2'

  return (
    <div>
      <h3>Object Literal</h3>
      {JSON.stringify(person)}
    </div>
  )
}