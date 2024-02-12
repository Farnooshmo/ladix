function Breakfast() {
  return (
    <div>
      <label for="breakfast">Breakfast</label>
      <select id="breakfast" name="breakfast">
        <option value="breakfast" selected>
          Breakfast
        </option>
        <option value="cheese">Cheese</option>
        <option value="egg">Egg</option>
        <option value="Yoghurt">Yoghurt</option>
      </select>
    </div>
  );
}

export default Breakfast;
