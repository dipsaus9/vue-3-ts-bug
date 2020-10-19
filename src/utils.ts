import { inject } from "vue";

const getValue = () => {
  const getter = inject("FakeValue");
  return getter;
};

export { getValue };
