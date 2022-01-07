interface Input {
  name: String;
}
function func(props: Input) {
  return props;
}

func({ name: 'Omer' });
