import { reactive } from 'vue';
export default function houseProperties() {
  let roomList = reactive([])
  return {
    roomList
  }
}