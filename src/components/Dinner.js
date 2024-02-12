function Dinner() {
  return (
    <div>
      <label for="dinner">Dinner</label>
      <select id="dinner" name="dinner">
        <option value="dinner" selected>
          Dinner
        </option>
        <option value="cheese">Cheese</option>
        <option value="egg">Egg</option>
        <option value="yoghurt">Yoghurt</option>
        <option value="salade">Salade</option>
      </select>
    </div>
  );
}

export default Dinner;
