function func<T>(input: T): T {
  return input;
}

const result = func<string>('omer');

const result2 = func<string[]>(['omer']);

const result3 = func<{ name: string }>({ name: 'omer' });
//const result4 = func<{ name: string }>({ age: 'omer' }); // gives error
//const result4 = func<{ name: string }>({ name: 2 }); // gives error
