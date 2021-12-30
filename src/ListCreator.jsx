// Presentational Components: 레스토랑 목록을 추가해준다.
export default function ListCreator({ restaurant, onChange, onClick }) {
  function handleChange(event) {
    const { target: { value, name } } = event;
    onChange({ value, name }); // onChange()에 인자넣기?
  }

  return (
    <div>
      <input
        value={restaurant.name}
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="이름"
      />
      <input
        value={restaurant.category}
        onChange={handleChange}
        name="category"
        type="text"
        placeholder="분류"
      />
      <input
        value={restaurant.place}
        onChange={handleChange}
        name="place"
        type="text"
        placeholder="주소"
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
