function startCountdown(id, finalDate){

      function updateCountdown(){

          const now = new Date().getTime();

              const distance = finalDate - now;

                  const timer = document.getElementById(id);

                      if(distance <= 0){

                            timer.innerHTML = `
                                    <div class="finished">
                                              ✅ Objetivo concluído!
                                                      </div>
                                                            `;

                                                                  return;
                                                                      }

                                                                          const days = Math.floor(
                                                                                distance / (1000 * 60 * 60 * 24)
                                                                                    );

                                                                                        const hours = Math.floor(
                                                                                              (distance % (1000 * 60 * 60 * 24)) /
                                                                                                    (1000 * 60 * 60)
                                                                                                        );

                                                                                                            const minutes = Math.floor(
                                                                                                                  (distance % (1000 * 60 * 60)) /
                                                                                                                        (1000 * 60)
                                                                                                                            );

                                                                                                                                const seconds = Math.floor(
                                                                                                                                      (distance % (1000 * 60)) /
                                                                                                                                            1000
                                                                                                                                                );

                                                                                                                                                    timer.innerHTML = `
                                                                                                                                                          <div class="time-box">
                                                                                                                                                                  <span class="number">${days}</span>
                                                                                                                                                                          <span class="label">Dias</span>
                                                                                                                                                                                </div>

                                                                                                                                                                                      <div class="time-box">
                                                                                                                                                                                              <span class="number">${hours}</span>
                                                                                                                                                                                                      <span class="label">Horas</span>
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                  <div class="time-box">
                                                                                                                                                                                                                          <span class="number">${minutes}</span>
                                                                                                                                                                                                                                  <span class="label">Min</span>
                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                              <div class="time-box">
                                                                                                                                                                                                                                                      <span class="number">${seconds}</span>
                                                                                                                                                                                                                                                              <span class="label">Seg</span>
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                        `;
                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                            updateCountdown();

                                                                                                                                                                                                                                                                              setInterval(updateCountdown, 1000);
                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                              startCountdown(
                                                                                                                                                                                                                                                                                "timer1",
                                                                                                                                                                                                                                                                                  new Date("December 23, 2026 00:00:00").getTime()
                                                                                                                                                                                                                                                                                  );

                                                                                                                                                                                                                                                                                  startCountdown(
                                                                                                                                                                                                                                                                                    "timer2",
                                                                                                                                                                                                                                                                                      new Date("December 23, 2036 00:00:00").getTime()
                                                                                                                                                                                                                                                                                      );

                                                                                                                                                                                                                                                                                      startCountdown(
                                                                                                                                                                                                                                                                                        "timer3",
                                                                                                                                                                                                                                                                                          new Date("December 23, 2031 00:00:00").getTime()
                                                                                                                                                                                                                                                                                          );

                                                                                                                                                                                                                                                                                          startCountdown(
                                                                                                                                                                                                                                                                                            "timer4",
                                                                                                                                                                                                                                                                                              new Date("December 23, 2032 00:00:00").getTime()
                                                                                                                                                                                                                                                                                              );
