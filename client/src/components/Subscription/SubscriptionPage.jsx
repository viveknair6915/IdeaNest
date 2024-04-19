import React from 'react';
import './App.css'; 

function SubscriptionPage() {
  return (
    <div>
      <div className="togethere-background"></div>
      <div className="sr-root">
        <div className="sr-main">
         
          <h1>Choose a collaboration plan</h1>

          <div className="price-table-container">
            <section>
              <form action="/create-checkout-session" method="POST">
                <input type="hidden" id="basicPrice" name="priceId" />
                <img src="https://www.google.com/search?q=user+image&sca_esv=09379ecd0b6efd91&sca_upv=1&rlz=1C1VDKB_enIN1024IN1024&udm=2&biw=1707&bih=898&ei=Eq4iZoX1BMjcseMProaQsAc&ved=0ahUKEwiFxu3k6s6FAxVIbmwGHS4DBHYQ4dUDCBE&uact=5&oq=user+image&gs_lp=Egxnd3Mtd2l6LXNlcnAiCnVzZXIgaW1hZ2UyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESOUfUPgIWNsdcAF4AJABAJgB3QGgAf8KqgEFMC44LjK4AQPIAQD4AQGYAgegAr0IwgIGEAAYBxgewgIEEAAYA5gDAIgGAZIHBTAuNS4yoAfjLg&sclient=gws-wiz-serp" 
                width="120" height="120" alt="" />
                <div className="name">User</div>
                <div className="price">Rs.1200</div>
                <div className="duration">per month</div>
                <button id="basic-plan-btn">Select</button>
              </form>
            </section>
            <section>
              <form action="/create-checkout-session" method="POST">
                <input type="hidden" id="proPrice" name="priceId" />
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUTEhAVFhUWFxkVGRcWExsWGBYWFRgWFxgVFRYYHiggGBolGxgXITEhJSkrLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0lICUrLS0vLS0tLy0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQCBwj/xABMEAABAwEEBQULCQYEBwEAAAABAAIDEQQFEiEGMUFRYRMicYGRBzJSU5KTobHB0dIVFiNCYmNyovAUM4KywuE0Q1TTJHODlKPD8UT/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADcRAAIBAwAGBwcFAQEAAwAAAAABAgMEERIhMUFRkQUTUmGh0eEUFSIycYGxIzNiwfCSQiRDcv/aAAwDAQACEQMRAD8A+4oAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgMEoDwZmrbRZjJ4No4LOgMmP2jgmgYyP2jh6U0Bk9C0BY0GZybGvB2rDTRnJ6WAaIbWxznNaalhof1tW8oSik3vNVJN4N60NggCAIDXFMx1cLgcJoaGtDuO4rLi1tRhNM2LBkIAgCAIAgCAIAgCAIAgCAw5wGtMZBofOdmSkUeJrk0k71sYMVG9ZMGDIN47Uwxk8mZnht8oLOi+Ayg2ZhNA5pO4OBRxa3DKNi1MhAHWgtBNcgCezNFDSeBnCyROjshxVJzdiJ6Sa+xWruPw4W4hossi55ZCAICA0pvcxNEUZ+kftH1W6q9J2dau2dv1ktKWxeJDVqaKwjXoZBhY87yB1gZ+sLbpCWZJdxrb7GWNUCwEAQBAEAQBAEAQGHGgqgPm8152mZ5IfJU5hrC6gG4Nb616CNCjSjrS+rKTnKTM/s9tP1Z+vH7VjSt12fAYn3mfk+2n6kvWT7SnW264DRmZ+SLYf8t/W8e1ye0UFvXL0GhMyLitZ/wAs+cb8Se1UOPgOrmZGjlqP1B5bfese2Uf8jPVSPQ0YtG5nlf2WPbaXfyHVSPY0VtG+Pyj8Kx7dT4MdTI9DRSbw4+13wrHt8ODM9SznvG45YGh5c0gEZtJq07DmApKV1Cq9HBrKm46y23ZMXwxudrLQSd53rl1YqM2lxLEXlI6VGbHDfUmGF3Gje05+iqmt45qIjqvESPsTi1oprw+tWKi0mRx1Il7rtTqEE1pv4qpWprOomhIlGPB1Ks1glNF421sMbpHahs2k7AOJW1Km6klFGspKKyfPRK6V7pXmpJ/QHADJd9RjTioRKMpZeS83GxjIxHiGMDE4VzBO8cMguLcNynpbtxcpJJYJJVyQIAgCAIAgCAIAgCApmh7aPmbtFB2FwPsXWvXmMGVqW1k5d9vbLjox7cDyzntw1p9ZvA9vBUqlNwxlrWs6iZM61oZCA0W5zgwluOuXeND3a9jTkVtBJy1+JrLYRJnm8K1/9vH7lZ0Yfx5s0y+/kY5SXwrZ5mMexMR4Q5sa+8xV/hW7yGD2LPw8Ic2Y1955LXeFb+we5Z1cIeI5nm820skmc3ft/fd9rbq4f3WaP762bNxifyP+yTuX/DxfgCgr/uy+pvD5UQdy90G7LS98bLS1jmuLRypEYkAJGKMuNHA01a+CToVILLRudd82kSObGw1AzJGYqd3QPWp7eGjFzZXqyy9E9AIZO67yM88zs4BQVcm8DfabwZCMT3U4bXcANq0hSlUeEjZyUdbKlfF6vtTwKYWN1N/qdxXUt7eNCOd5XqVNI8R82lNmpbvXtIiY0XaTPXc0166e1U71pU8d5NQ+Yty5RcCAIAgCAIAgCAIAgKhcYw2y0N4vP5/7rqXDzQg/9sK0NU2St2/vLQPvgeowwn11Vap8sX3f2yZHcojIQBAEAQHLbbcyOgJJe7vWNGJ7uIaNmqpNANpC3hBy17uO4waLlktRa/8AaWsaQ+jMIpVlBm7nHOtdWXTrO1ZU8rq+Gv68kFnea9Kf8M/pb/MFJZ/vL7/g0q/KbLlH/DxfgC1r/uy+oh8qPjWlHcle2RxsUrXMrlHLUOb9lrxUOocs6dKmh0nFfDUX3RcjaTlFSRW9Fr/nuq1OjnD+TbVskQIdQ0qHMzwg1pmDmFcko1YaUCrOGHh7T7001AO/NVCE0Wy8ORoQKuNaA6tWs8FvCj1mrcYctEgXF8ri57iTtJ9Q9yvJRprEURNt7TqYwAUCjbyanoBYBb9HbI1kdQ4Oc484g1Ap9Wo3e1ci6qOc+4uUYpRJZViYIAgCAIAgCAIAgNU76DitorJhsqli5t4SDe0+lrHLp1NdrH6+ZXj+4yWsppaJm72xP8oSM/8AWqkl+nF/VfjzJjuUZkIATTM6kBwG94jlEHTHdEMQqNhkJEYPAuCk6mX/AK1fXy2+BjJ5e20v75wibUDDH9JIQSBUvcMLeIDTwcs5px2a/rqXL1+w1nTY7FHFXA2hd3ziS57yNr3uq5x6StJTlLaMHuz0oaU752qvhHft9G5YZkj9Kf8ADP6W/wAwViz/AHl9/wAEdX5Tbcv7iL8IWtx+7L6iHyoi7Q/M13rkS2no6SWisFStOjD7RbYZniEWaAue1vOfJLI84nOfkABioRmdW2tB2bOSVHO9/wBHHv54qaGNn9lyUpQIG/T9IPwj1lXbf5SOe0zC2jQFlvLIz2sAIC6XDZ8ELQdZ5x/i1eii4tzPSqNl6lHEUSKgJAgCAIAgCAIAgMYhv1IDje6pqpksGhXZebeLPtN/ocPYry12r7mQ/wD2En3tpeaEl0DKAUqeTfLkKkD/ADBrVbbTX1/KXkTbz1y9pPewMb/zJcx/DG1wPlLGjTW2WfovPH4Gs8OhtBIDrQG1qfoo2tOVMvpMddesAU61nSgtkeb8sDWexdENavaZDrrK4y0O9rXktb/CAsddPdq+mr8DB0spjOrvW760q+nCnRx4LTcBadWdO+ZrBP127tv6OSwtpk2rANcByOf1nfWxfWO3Z0bNWxZZgi9K5GizuBIqS2grmaOBNBtUlGvCjUUpvCN429Wv8NNZOC7tIIWRMYQ+rWgGgFK9qq1r+lKbaztOhDoa40VnHM0221tndiZWgAFDkcq7AeKqVKiqPKOjbUJ28NCe0WadjKtc4DaK/rgr9rcU4QUZPDOZfWdarVdSEcrB2NeCKggjeCr0ZRl8rycmdOUHiSa+pWbbNje5280HQMgunTjoxwV28s7QFGamUB3XVYTI4EjmA58fshV69XRWFtJKcNJ9xdguMXjKAIAgCAIAgCAICn6VWh8NpbJGaFzBUbHUJycNuVF1bKEatJxlxK1VuMsolrst7JmYm5HU5u1p3dHFVatJ05YZJGSkiMvXK2Wd2+jfzEf1KzR1280Ry+dHVbLbEy1x4pWN+hlBDntFCX2ctrU5VGKirxpylSbSe1f2TZ1nX8rWb/Uw+dZ71p1U+y+QyeflGEkFsrXAA1wOa+laUrQ1G2nWtJ/Avi1ElOnKo8ROSa386sdRvrqPVsVOVXXmJ06dr8GjU1nXDeEZq5zw0YW1xPAANXVyPSM9uW5Wac1NYW0oVreVN93E8T3xZcP+Jh2f57G7Rtqp1Snn5XyK+TZ8sWX/AFMPnme9Y6ufZfIZI+36QRxtIYcb6upqwjM0JLciPTvoqde5jDUtbOnadG1Kz0pao/n6FStVpfI4ue4lx/VANgXLnNzeWelpUoUo6MFhGhmqu/P3LBKew5DDWT1VDGD01x368upSUqsqclKL1ohrUYVYuE1lGyyxZ13L11peq4p537zxN/ZStamjuexnapyiYQExctjfUPNQ3YPCrw3KncVItaKJ6UHtZabK6rejJcya1lpbDatTIQBAEAQBAEAQFK04NZIzwcOwhdfo7VGX2KtfaiIu23GCXEM26nDwmn27QrdakqsMbyOMtFk9pIxxEU8XODDiqBXI4XNdTdl6VRtWk5U56sktTc0c50njJa51n5zQQDj1YqV2cAt/YpJYU9Q67uNnzrj8R+Ye5a+wy7Q65cDxJpLA7XAfKC1l0c5bWiSF3KHy6gzSKzj/APOe0H1rVdG43o2d7N7WzntF8QONWsc2uutCPQoqnRc/mg1ktW/SSXw1NnE0Wy9ZG4RHJlSux3rB3Lj1qtanLRbaZ3ba1t60XPCZw2i3zPFHSEjdqHYMlXlXqS2yZdp2dCm8xijmURZMsaSaAVO4ZlWre0qVta1Jb3sKV1fUrfCk8t7FvMBVS6EAWUsvCMNpLLPQKmr29ShLRqLDK9vc07iGnTeUbbO+hHHJT2Ffqqy4PUyr0rbKtby4rWvsd69YeGJe4WNdWsYJGYdT0bqqnctrY/sTUUuBNqmWDpsZ1hRVDaJ1KM2CAIAgCAIAgPLzQFZQKVpn30XQ/wBbV17DZL7FWtuICTU08KdY/sQr62tEJYtHb1wxljmvdhPNwtrkdm4UPrXDvq9JVPheXvwdS3sq0o5ktFd+r1JI3y0ZmGUDfRpp085UvaVvTLPu6T2SXj5HVZLfFJ3jgTuOR7CpYVYz2MrVrWrR+deR0qQrhDIQwabRZo3ij2NcOIr2blrKEZfMiWlWqU3mDaI5+jtmP1XDoefbVQO0pMux6WuVvXI2QXFZm58nX8RLvQcltG1px3GlTpO5msaWPpqO2VvNIApzSMuhTNfDgqQfxpvifOQuAe6CA2QQueaNBJoTQa6AVKuWEVK4hpbM5KHSdRwtZtb1jmbpGgxgjZ+iu50vR06OlvX4PN9CV3TudDdL87jmqvMJ4eT2LWVgudy2aVlcWTTqFa578tWS9RWqQmljafP4QcW0yUUBIEBusZ53V7lHU2GYnaojcIAgCAIAgCA5LXa2NIYXUc7UN9OOpSQhJrSWxGspJPBVNMxnF0P/AKF1LD/19v7K9bcRl3WQuAq2oLua3UXGmdTsaNpXOv7x1JunDZs+vodqytI0YdZU+bb/APlbvu/As9nuptBynO+yOawdDRr6SqCpreSTuZN/Dq79/MyyOyue6MMZibmRgoRq204hEoN4DlXjFTbeH3nJbrjHfQkhwzAr/KdYK1lS3xJqV6/lq60dNyXkZAWP/eN6sQ1VpsI2qxb1tPU9pSvrRUnpw+V+BKKyc4wShlLOw4X3vADQPxH7DS/0tFFC7imt5bjY12s4x9Wl+TDL4gJoXlp+01zfSRRFcU3vErCullLP0aZ2hwIqDUcFMtZUaaeGZWTB83kZhJbuJHYaLz7WG0e7hLSipcUeVg3J3RGOsrnbmekke4q7YrM2+443TUsUYx4sm71u6JzHuwDFhcajIkgGlaa+tdSpOXVSjnVg4FriNeEu9FJjZiIaNZIHaaLz8VlpHtZy0YuXA+jUXoEeFbywsmDCA32TvupaVNhmO07VCbhAEAQBAEAQFc0vb+6P4h/KuhYf+l9CtcbiAve1mVkYd3zS4E7wcNCeOSlq/wDx6VSceGr67P7JbOPX14QfH1JjRuHmF5/C3g0ZmnWT2LgUVqyd6/l8egvr9zGkt5PiDWsyLq87cBTVxzWK9RxWoWFtGrJuexEbZLnne0TNnGJ4rXE6vQXDbwUcaU2tJMt1LyjB9VKGpf7YWWxMe2Noe7E4DM7yrMU0tZyKri5txWERF6N5K0RyjIOOfoa78p9Cjl8FRSRdo/rW86b3bCcmlDWlzjQAVJ4BdCUlFZZw4Qc5KMdrK/LJJaHUplrDCaNYDqdLTvnHY1c+c5VX/vE7dOnTto538d77lwXeSEd1sA573EDM87A0dDW0ACyoLeQyuZN/Cl+XzZ4ddVnkaC0mmwteXDjSpITq4yRtG6rUnh+KI5zZrI6oOKMnVsPV9V3FaRlOi9WwsyjSvY4eqX+5lis87XtD2moIqPceK6UJKSyjgVacqcnCW1FHvuLDPIN7sXlc72rjXEdGo0eusJ6dvB92ORwqEuFj0OIrLvozs539l0LDbI4PTecQ+/8ARY5W1aRvBHaF0JbGcKm8ST7ytXPdjeVaanm87Phq9NOxc23opzT4Hob+7kqLXHUWddQ82YQBDB0WPvj0LSpsNonYoTcIAgCAIAgCAr+l3ex9J9Sv2PzMr3GxFXl1KXpCObeX+3k3RUlG6hnv/BZNHX1gA3FwPbX1FcKi/hOxfLFZ/Y23pdrJ2gOqCMw4bK+sLNSmprDNLe4lQlmPIrdru20WYY2yc2ozaSOjE3/6qsqc6etM61O5o3T0JR19/mWG4rc6aLE7vgS0020oa9hVmlNyjlnLu6Co1NFbNpyaSZmJg1l3rLR7VrV1tImsfhU5PchpVai0MYNpxEbw2lAd4r6lNeTwlEg6JoqUpTe7VzJG77NybAD3x5zjvcdZWsY4RpWqacs7t30IO9r0lfIYIgACSw73HURU6hrUFSpJy0InRtrWnCn11T6nu7rHbYnMaC3k8WYqCACanXn2JCFSOFuNa9a1qpyw9In54mvaWuFQRQqw1lYObGTi1JbSG0deWPlhJ701HUaHt5pS0lhuDJ+lIqcIVlv1FI7tF6Wiyvs8kJaBIHtdVoObMBb6HHsXRpWdGvJ6a1lKhfVqMdGD1HzR+nFvP12DojHtVhdE2y3PmTPpS57XgS+genFpjt8JtExdFIeSeCAABIQA+goBR2E13V3qSdjShBunHDKta5q1Vicsn6DtLqNcdwK503iLZHRjpVEu84rnioC7eadn69Cgto6my70jUzJR4EgrRzgsmAhk6rCNZUNRm0TqUZsEAQBAEAQBAV/S7vY+k+pXrH5mV7jYituZkOI9pC6EkppxZXhJwkpLatZ0XJb+SeWv7x23cdh6F5icHb1HCR62TjeUVVp7VtX9EtfN3vmwGOTCW1I10NaZ1Gr+6xUg5bGQWteNFtTjnJBR2KeWV0L5jzMzUucNmoHWc1AoTlLRb2HSdejSpqrCO0s1lgjs8VK0a3Mk7SdZKsxShE5NSc69TO9kbdwM85mIoxmTa7Ts7Kk9JCUIupPTexEt3NW9DqV8z2mnSnKWInVT1OqfWsXnzxZJ0RrpTS2+hYlIUCv3vcDnvMkThUmpacs97Sq9Si28xOnbX6hDQqLUcUd62mBwbLUjaHZmm9rtvpUaqzg8SLErWhcR0qWr/cC2NNc1cOIQlgztspGoNI6+YPWCtKH7z+hbvNVlBPj5lT7vFkxWCOQD93O2vBr2PafzYV2rR4qYOIfCqAjIUIzy2jbr2rrYyZNawD9BaD6Sy26zxtLalkTQ81GIvYXMcXZ7aNdq+suNfWujT0ove9X4LNnUhCbcjrveK9Wco+KRscLAXAVjJo0Vcc2k5muVVcsVZRpRhUTcvv5kNzUc6jlHYWq63vdDE6QgvLGlxGouLRUjrVKqoqpJR2ZeCJHStDJhDBIWZtGjt7VXk8skWw2rUyEAQBAEAQBAV3S85Rji7+n3q/YbZFa43EBJ3reg+sroLayu9hpewFQ3FtCvHEuZZtLypbS0ofdcRZr0lhOFr6gbHCo6ty48+jrmn8nxI70b+zuNdT4WS7LxtjgC2zjMVBoaEHUcyqr67ONEk6uz29YemXTPKQbRJkPqNPuyHTmVtG2nJ5qP7Ec7+jRWKEdfFk3FG1oDWgADIAbFdjFJYRx5zlOTlJ5bI3SKxGSKrRVzOcOI2j9blBdUtOGrai/0bcKjVw9j1Hm4LwEkYaTz2ih4ganKtSnpIt3lu6U8rYzivJltY58jJOZm6lQaNH2XcNyjmqibaeonoStZxjCa1/7gclju+a1ESyv5uqu0gHUABQbVpGnKp8UmT1binap06a1livC2thYXHoaN52DoVmclFZOXRoyrT0V9zi0dsrmsdI/vpDi6syO0knsU1pTai5PazTpOvGU1Thsj+SM7qVj5W67UNrWCQf8ASe159AK6FB4qI5h+bIXhrg4ioBBI3gHMda7LzjUZZ9Jttwx2WWSBoDmtcXNJFTgfz2Ak6yGuaOpdCwxOhGTWvX+SCb1mIiWmrThI1FuRFdxCuuEWsNajXJsltMjhhdI9w3OeSMsxkTvWsaUIvKil9hlnuC3TMADJpGAag2RzQNuQBotZUKUnmUU/shln1vRu0mSywvcSXFgqTrJbzSTxqF5G7pqnXnFbMkyeUSkTKkBVZPCNkSSrkgQBAEAQBAEAQFZ0udzoxwd6S33Lo2GyX2KtxtRBSnmDhi9h9qs1pOMJtcDFvFSqwi9jaOLlXb15v2+47f4PYe67TsLx8zw4VzKyukbnt/gz7rtOwvHzOyO9Z2gNbIQAAAKNyA1DUoXc1W8uRt7vtux+T18s2jxp7G+5Y9oqcTPu+27H5Bvi0eNPY33LPtFTiY9323Y/Jc26l1lsPKS2shLyuQl3KQOwP101AneDsPoVOta5elDUzrWvSSUerrrMTR8q2lgwzWYu2VAIr00BBUDlUjqlEtq3t6mulUx/vsZjvWYjDDZCN2RwjqAAHainN6oxErajF6VWqv7/ALNtkud73cpaXYjsZsHTspwHpU9O1belU5FWv0hCEert1hcSbV445yXvZBLBNEdUkb2eW0t9qzF4aYPyVTJd5axuPrOk9oq+B4H72y2eQ9JZh9TQrPRcmqGHubIprWRP7QNoPUuhOT0XjaaYJC9HWZobyLgTizwvLubQ6wSaZ0VWhKppfFnBhZ3kcbTuCuaRnB9k0ObSxWfiwO63EuPrXkL55uJvvJo7CyWOPKu/1Ln1HrwSRR0qM2CAIAgCAIAgCArOlzedGeDvQR710bB6pfYq3G1EE792eB9YPuViu8Qk+5mLZZqwXeiPxcB2LyvXfxXI9z7P/OXMwT+gs9d/GPIez/ylzNsc9BTA08S2pWrqZexch1H8pcz1+1fds8lY0+5Geo/lLmDavu4/JTT7kY6j+UuZa74tb44g5lK1AzFciCunXqOEMo85ZUIVqzjPZrIP5en3t8kKn7VUOx7rt+D5j5en3t8kJ7VUMe67fg+Y+Xp/Cb5IT2qoPddvwfMfLs/hN8kJ7XUHuu34PmdN23vM+VjXEUJz5vAlSUbicppMr3XR9GnRlOKeV3liquicE/Kmk1k5K2WmKlME8rR0B7qeii7lF5gn3BH1Rui9otVksM8Ba7/hIonNLsJHJ4qEE5HviOodWLW+p0HOE8/M2aSjkrGkdjfYXtZaW4S9uJpHOBANDQt2jdxC6NK9o1Plfga6DN+jl0y25r3WYNeGENdVwaQSKjJ1MjnnwKxVv6NN4k3yGgyX+Yl4eKb51nvUfvS34vkNFn1e4rvMcMURNeTjYwkaiWtANOkrzdxV0pynxbJUibAVMkMoAgCAIAgCAIAgILSyKsbXeC6nU4e8BXbGWJtcSC4Xw5Ky3vXj7NezP1VV251U2+5/gjtddaK71+SOxDcO0rynWQ7C8fM911M+2+S8hiG4elOsh2F4+Y6qfbfJeR6ieBWrA7pJFPJIWJTi9kUufmOqn23yXkbOXZ4lvlP+JY0lw/Jnqp9t8l5GDOzxLfKf8SaS4fkx1U+2+S8i0aQOAhBLQec3IkjYdxBXRuX+mtR5/o6Ldw0njaVrl2eJb5T/AIlztJcDv9VPtvkvIcuzxLfKf8SaS4Dqp9t+HkZ5dnim+U/4k0lw/I6ufbfJeQ5dnim+U/4lnTXAdXPtvw8jruiVpmZSNozOYLssjvdRS0JLrFqKl9TkqEsyb1d3kWxdY8wfnTutWQx3pPlk8RyD+KNoP5g5dizeaSCPsXcwlxXXZDuY5vkyPb7FzrhYqy+oNPdQ0c/bLE7A2s0NZY95oOewfibs3hqzbVerqdzMHzDuNXxyNvERPMtDDHwxt58ZPY5v8a6F7T0qelwMn39jCTQLjtpIbSQijDRQKu3lm6WD2sGQgCAIAgCAIAgCA5rxs3KRuZvGXSMx6VJSnoTUjWcdKOCh1pWo2EEdRBC69fDpS+hVts9dHHFEfUbj2/2Xk9Kl2Xz9D3ehX7a/59TIc2hyNdhxaukUz9CxpU+y+foZ0K3aX/PqYqMvTnr6NyzpUuy+foY0K3aX/PqbuUi8W/zo+BaZhw8fQ20KvaXL1MGSLxb/ADo+BMw4ePoY0KvaXL1LTpAW8gMQJGJuQdTYdtCulc46pZPPdHKTuXh8Ss8pF4t3nB8C52lHh4+h6DRq9pcvUzykXi3ecHwJmHDx9Bo1e0uXqOUi8W7zg+BMw4ePoNCr2ly9Rji8W7zg+BMw4ePoY0KvaXL1Ou6Hx8syjHA1OZeDsOzCFNQcesWF4lW+jU9nlmS2cPUtq655Y+I93eyUtcEvhwlnXG8n1SBdOwfwtGS+dyF1bqs/Ayj/AM0h9qqXf7z/ANuMFxqq4Pzv3QLndd94l0QwtLhaYTTIHFiwj8LwRTdhXatpqrSw/ozJ+jrhtkc9ninj72VjZBv5wBoejUvP1U4zcXuN0d6jMhAEAQBAEAQBAEAQBAVDSiwYHGQDmvrXg6mfbr7V0KVVSoyhLcnyIYwarwa4orJw8fQvO/o9/ge2/X/j4myPkqc7HXhSnpWH1e7PgF1/8fE9fQ/eflWPg7zP638fE1twVzxU4UrRbfpd/gY/X/j4ns8j95+Va/B3mf1v4+JaL/w8gMVaVbqpXUd66VzjqlnuPO9HaXtL0cZ1la+h+8/Kud8Heeg/W/j4j6H7z8qfB3j9b+PiPofvPyp8HeP1v4+I+h+8/Knwd4/W/j4nZdBj5ZlMda7aU1FTUNDrFjJVvut9nlnGMd5bF1zyx8z7ud2vkgs8jI3OMcjmnC0uo2RtamgyFWDtCu2M1GTTeNQSb2Ez3IY3tuyJr2OaccmTmkGheSDQ9Kju2nVbTBe4rKTry9apSqcDKiVDutaIOt1lYYGt5aF+JtTSsbhSRteprv4VNZ3SozblsaN1DSaSO/uYXbLZrCyzyyte5jnEYa0a15xBtTm4VLs6DdsUNxXjWqOcVhElSjKk9GRbVCRhAEAQBAEAQBAEAQBAcl6xNdDIHasDjqrSgJqOKw20ng3pfPH6o+aEN2OPk0y7VzVGn2ny9T1+lW7K/wCvQ24IfGP80P8AcWuI8fD1GlW7K/69Bgi8Y/zQ/wBxMR4+HqNKr2Vz9DGGLxj/ADY+NMQ4+HqZ0qvZXP0BbF4x/mx8aYhx8PUxmr2Vz9C06QBvICpIFW5htTqOyo9a6dzjqlnuPO9HOXtLwtesrGGLxj/Nj41zcR4+Hqeh0qvZXP0GGLw3+bHxpiPHw9RpVeyufoMMXhv82PjTEOPh6jSq9lc/QYYvDf5sfGmIcfD1GlV7K5+h2XO2Plo6PcTXUWAbDtxFTUFHrFh+HqVL51PZ55S2cfQk9KtKbPYYw6XE5zq4I2Cr3U1nc1o3n0rvULedZ/CvueUPkl8d1u3veMEMUUYNcBBeXAbHPNPygaldl0bBxcZZJKVR05KSPqnck0lfb7I+SRjWvjmdHza0LaNe2leDqfwrlXNHqZKC2G0p6cnJl4VcwcV9WZ0lnmjYSHPiexpBoQ5zSAQdhqVtBpSTYPzr3N9Kp4r0hfNM94mIs0mNxOTzRmvVhkIPCrt5XcvLeHUtQWMazVycnls/S64JsEAQBAEAQBAEAQBAEBptkRdG9o1ua5orvIIzWJLKwb05aMk+DKd8zrR4yPtd8Ko+yy4o7/vij2X4eY+Z9o8ZH2u+FPZZcUPfFLsvw8x8z7R4yPtd8Keyy4oe+KPZfh5j5n2jxkfa74U9llxQ98Uey/DzMHQ60eMi7XfCs+yy4oe+KXZfh5k/fFzuliDGOANQedqyHAK3VTnDRORZ3EaNbrJLj4kF80J/Dj7XfCqnssuJ1vfFLsvw8x80J/Dj7XfCnssuI98Uuy/DzHzQn8OPtd8Keyy4j3xS7L8PMz80J/Dj7XfCnssuI98Uuy/DzOm69GZo5WPc6MhpqQCa6iNoW9OhKMk8kFz0nTq0pQSev6FlnscT+/jY6nhNBp2hXYzlHY2jiYNIumzf6eLzTfct+vq9p82MI6YYWMFGNa0bmgAehRyk5a2zJsWAEB8Xv7uPWl9vdNZ54mQPl5UVxY4yXYnANAoaOrTPdqXWp31PqdGec4x/tZphn2hck3CAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID//2Q==" 
                width="120" height="120" alt="" />
                <div className="name">Investor</div>
                <div className="price">Rs.1800</div>
                <div className="duration">per month</div>
                <button id="pro-plan-btn">Select</button>
              </form>
            </section>
          </div>
        </div>
      </div>
      <div id="error-message" className="error-message"></div>
    </div>
  );
}

export default SubscriptionPage;