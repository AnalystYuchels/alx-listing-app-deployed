const filters = ["Top Villa", "Self Checkin", "Beachfront"];
<section className="p-4 flex flex-wrap">
  {filters.map(filter => <Pill key={filter} label={filter} />)}
</section>
