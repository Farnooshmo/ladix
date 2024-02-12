function Lunch() {
  return (
    <div>
      <label for="lunch">Lunch</label>
      <select id="lunch" name="lunch">
        <option value="lunch" selected>
          Lunch
        </option>
        <option value="cheese">Cheese</option>
        <option value="egg">Egg</option>
        <option value="yoghurt">Yoghurt</option>
      </select>
    </div>
  );
}

export default Lunch;
